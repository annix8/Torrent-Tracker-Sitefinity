using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using SitefinityWebApp.Mvc.Controllers;
using SitefinityWebApp.Mvc.Models;
using SitefinityWebApp.TorrentTrackerServices.Contracts;
using SitefinityWebApp.TorrentTrackerServices.Dtos;
using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;

namespace TorrentTracker.Tests.Mvc.Controllers.CreateTorrentWidgetControllerTests
{
    [TestClass]
    public class Index_Should
    {
        private Mock<ITorrentService> _torrentServiceStub;
        private Mock<ITaxonomyService> _taxonomyServiceStub;
        private Mock<IModelStateValidatorService> _modelStateValidatorServiceStub;
        private Mock<HttpPostedFileBase> _userImageDataStub;
        private Mock<HttpPostedFileBase> _userTorrentDataStub;
        private CreateTorrentWidgetController _controller;

        [TestInitialize]
        public void Init()
        {
            _torrentServiceStub = new Mock<ITorrentService>();
            _taxonomyServiceStub = new Mock<ITaxonomyService>();
            _modelStateValidatorServiceStub = new Mock<IModelStateValidatorService>();
            _userImageDataStub = new Mock<HttpPostedFileBase>();
            _userTorrentDataStub = new Mock<HttpPostedFileBase>();
            _controller = new CreateTorrentWidgetController(_torrentServiceStub.Object,
                _taxonomyServiceStub.Object,
                _modelStateValidatorServiceStub.Object);
        }

        [TestMethod]
        public void CallTorrentService_When_ModelStateIsValid()
        {
            _modelStateValidatorServiceStub.Setup(x => x.Validate(It.IsAny<ModelStateDictionary>(), It.IsAny<CreateTorrentWidgetModel>()))
                .Returns(true);

            CreateTorrentWidgetModel torrentWidgetModel = CreateTorrentWidgetModel();

            _controller.Index(torrentWidgetModel);

            _torrentServiceStub.Verify(x => x.CreateTorrentWithPublish(It.IsAny<CreateTorrentDto>()), Times.Exactly(1));
        }

        [TestMethod]
        public void NotCallTorrentService_When_ModelStateIsInvalid()
        {
            _modelStateValidatorServiceStub.Setup(x => x.Validate(It.IsAny<ModelStateDictionary>(), It.IsAny<CreateTorrentWidgetModel>()))
                .Returns(false);

            CreateTorrentWidgetModel torrentWidgetModel = CreateTorrentWidgetModel();

            _controller.Index(torrentWidgetModel);

            _torrentServiceStub.Verify(x => x.CreateTorrentWithPublish(It.IsAny<CreateTorrentDto>()), Times.Exactly(0));
        }

        [TestMethod]
        public void CallTaxonomyServiceToCreateGenres_When_ModelStateIsInvalid()
        {
            _modelStateValidatorServiceStub.Setup(x => x.Validate(It.IsAny<ModelStateDictionary>(), It.IsAny<CreateTorrentWidgetModel>()))
                .Returns(false);

            CreateTorrentWidgetModel torrentWidgetModel = CreateTorrentWidgetModel();

            _controller.Index(torrentWidgetModel);

            _taxonomyServiceStub.Verify(x => x.GetTaxonNamesByTaxonomy(SitefinityWebApp.Constants.GenresTaxonomyName), Times.Exactly(1));
        }

        [TestMethod]
        public void AddSuccessMessageToTempData_When_ModelStateIsValid()
        {
            _modelStateValidatorServiceStub.Setup(x => x.Validate(It.IsAny<ModelStateDictionary>(), It.IsAny<CreateTorrentWidgetModel>()))
                .Returns(true);

            var torrentWidgetModel = CreateTorrentWidgetModel();

            _controller.Index(torrentWidgetModel);

            Assert.IsTrue(_controller.TempData.ContainsKey(SitefinityWebApp.Constants.SuccessMessageKey));
        }

        [TestMethod]
        public void AddErrorMessageToTempData_When_ModelStateIsValidAndTorrentModelIsNull()
        {
            _modelStateValidatorServiceStub.Setup(x => x.Validate(It.IsAny<ModelStateDictionary>(), It.IsAny<CreateTorrentWidgetModel>()))
                .Returns(true);

            CreateTorrentWidgetModel torrentWidgetModel = null;

            _controller.Index(torrentWidgetModel);

            Assert.IsTrue(_controller.TempData.ContainsKey(SitefinityWebApp.Constants.ErrorMessageKey));
        }

        [TestMethod]
        public void NotAddSuccessMessageToTempData_When_ModelStateIsInvalid()
        {
            _modelStateValidatorServiceStub.Setup(x => x.Validate(It.IsAny<ModelStateDictionary>(), It.IsAny<CreateTorrentWidgetModel>()))
                .Returns(false);

            CreateTorrentWidgetModel torrentWidgetModel = CreateTorrentWidgetModel();

            _controller.Index(torrentWidgetModel);

            Assert.IsFalse(_controller.TempData.ContainsKey(SitefinityWebApp.Constants.SuccessMessageKey));
        }

        private CreateTorrentWidgetModel CreateTorrentWidgetModel()
        {
            return new CreateTorrentWidgetModel()
            {
                Title = string.Empty,
                AdditionalInfo = string.Empty,
                Description = string.Empty,
                Genres = new List<string>(),
                UserImageData = _userImageDataStub.Object,
                UserTorrentData = _userTorrentDataStub.Object
            };
        }
    }
}
