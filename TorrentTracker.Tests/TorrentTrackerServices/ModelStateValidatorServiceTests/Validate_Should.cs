using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using SitefinityWebApp.Facades.Contracts;
using SitefinityWebApp.Mvc.Models;
using SitefinityWebApp.TorrentTrackerServices;
using System.Web;
using System.Web.Mvc;

namespace TorrentTracker.Tests.TorrentTrackerServices.ModelStateValidatorServiceTests
{
    [TestClass]
    public class Validate_Should
    {
        private Mock<IPathFacade> _pathFacadeStub;
        private Mock<HttpPostedFileBase> _userImageDataStub;
        private Mock<HttpPostedFileBase> _userTorrentDataStub;
        private ModelStateValidatorService _modelStateValidatorService;

        [TestInitialize]
        public void Init()
        {
            _pathFacadeStub = new Mock<IPathFacade>();
            _userImageDataStub = new Mock<HttpPostedFileBase>();
            _userTorrentDataStub = new Mock<HttpPostedFileBase>();
            _modelStateValidatorService = new ModelStateValidatorService(_pathFacadeStub.Object);
        }

        [TestMethod]
        public void ReturnFalse_When_ModelStateIsInvalid()
        {
            var modelState = new ModelStateDictionary();
            modelState.AddModelError(string.Empty, "dummy error");

            bool actual = _modelStateValidatorService.Validate(modelState, null);
            Assert.IsFalse(actual);
        }

        [TestMethod]
        public void ReturnTrue_When_ModelStateIsValidAndFilesAreValid()
        {
            var modelState = new ModelStateDictionary();
            _userImageDataStub.Setup(x => x.FileName).Returns(Constants.JpegExtension);
            _userTorrentDataStub.Setup(x => x.FileName).Returns(Constants.TorrentExtension);
            var torrentWidgetModel = new CreateTorrentWidgetModel()
            {
                UserImageData = _userImageDataStub.Object,
                UserTorrentData = _userTorrentDataStub.Object
            };
            _pathFacadeStub.SetupSequence(x => x.GetExtension(It.IsAny<string>()))
                .Returns(torrentWidgetModel.UserImageData.FileName).Returns(torrentWidgetModel.UserTorrentData.FileName);

            bool actual = _modelStateValidatorService.Validate(modelState, torrentWidgetModel);
            Assert.IsTrue(actual);
        }

        [TestMethod]
        public void ReturnFalse_When_ModelStateIsValidAndImageFileIsInvalid()
        {
            var modelState = new ModelStateDictionary();
            _userImageDataStub.Setup(x => x.FileName).Returns(Constants.InvalidExtension);
            _userTorrentDataStub.Setup(x => x.FileName).Returns(Constants.TorrentExtension);
            var torrentWidgetModel = new CreateTorrentWidgetModel()
            {
                UserImageData = _userImageDataStub.Object,
                UserTorrentData = _userTorrentDataStub.Object
            };
            _pathFacadeStub.SetupSequence(x => x.GetExtension(It.IsAny<string>()))
                .Returns(torrentWidgetModel.UserImageData.FileName).Returns(torrentWidgetModel.UserTorrentData.FileName);

            bool actual = _modelStateValidatorService.Validate(modelState, torrentWidgetModel);
            Assert.IsFalse(actual);
        }

        [TestMethod]
        public void ReturnFalse_When_ModelStateIsValidAndTorrentFileIsInvalid()
        {
            var modelState = new ModelStateDictionary();
            _userImageDataStub.Setup(x => x.FileName).Returns(Constants.JpegExtension);
            _userTorrentDataStub.Setup(x => x.FileName).Returns(Constants.InvalidExtension);
            var torrentWidgetModel = new CreateTorrentWidgetModel()
            {
                UserImageData = _userImageDataStub.Object,
                UserTorrentData = _userTorrentDataStub.Object
            };
            _pathFacadeStub.SetupSequence(x => x.GetExtension(It.IsAny<string>()))
                .Returns(torrentWidgetModel.UserImageData.FileName).Returns(torrentWidgetModel.UserTorrentData.FileName);

            bool actual = _modelStateValidatorService.Validate(modelState, torrentWidgetModel);
            Assert.IsFalse(actual);
        }
    }
}
