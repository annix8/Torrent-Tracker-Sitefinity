using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using SitefinityWebApp.Facades.Contracts;
using SitefinityWebApp.TorrentTrackerServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace TorrentTracker.Tests.TorrentTrackerServices.ModelStateValidatorServiceTests
{
    [TestClass]
    public class Validate_Should
    {
        private Mock<IPathFacade> _pathFacadeStub;
        private ModelStateValidatorService _modelStateValidatorService;

        [TestInitialize]
        public void Init()
        {
            _pathFacadeStub = new Mock<IPathFacade>();
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
    }
}
