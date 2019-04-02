﻿using System;
using System.Web.Mvc;
using Ninject;
using Telerik.Sitefinity.Frontend.Mvc.Infrastructure.Controllers;

namespace SitefinityWebApp.IoC
{
    public class NinjectControllerFactory : FrontendControllerFactory
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NinjectControllerFactory"/> class.
        /// </summary>
        public NinjectControllerFactory()
        {
            ninjectKernel = new StandardKernel(new InterfaceMappings());
        }

        protected override IController GetControllerInstance(System.Web.Routing.RequestContext requestContext, Type controllerType)
        {
            if (controllerType == null)
            {
                return null;
            }

            var resolvedController = this.ninjectKernel.Get(controllerType);
            IController controller = resolvedController as IController;

            return controller;
        }

        private IKernel ninjectKernel;
    }
}