using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Eseasy.Infrastructure.Interfaces;
using Eseasy.Infrastructure.Repositories;

namespace Eseasy.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork, UnitOfWork>();


            /*
            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<IBlobService, BlobService>();
            */

            return services;
        }
    }
}