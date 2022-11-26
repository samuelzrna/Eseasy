using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using System.Data.SqlClient;
using Eseasy.Infrastructure.Interfaces;

namespace Eseasy.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private IDbConnection _connection;
        private IDbTransaction _transaction;
        private IConfiguration _configuration;
        private IServiceProvider _serviceProvider;


        public UnitOfWork(IConfiguration configuration, IServiceProvider serviceProvider)
        {
            _configuration = configuration;
            _serviceProvider = serviceProvider;
        }

        public IDbTransaction GetTransaction()
        {
            return _transaction;
        }


        public void BeginTransaction()
        {
            var connectionString = _configuration.GetSection("IBC_CLOUD_SQL_CONNECTION_STRING").Value;
            _connection = new SqlConnection(connectionString);
            _connection.Open();
            _transaction = _connection.BeginTransaction();
        }

        public void Commit()
        {
            try
            {
                _transaction.Commit();
            }
            catch
            {
                _transaction.Rollback();
                throw;
            }
            finally
            {
                _transaction.Dispose();
                _transaction = _connection.BeginTransaction();
            }
        }
        public void RollBackTransaction()
        {
            _transaction.Rollback();
        }
        public void Dispose()
        {
            if (_transaction != null)
            {
                _transaction.Dispose();
                _transaction = null;
            }

            //      if (_connection != null)
            // {
            // _connection.Dispose();
            // _connection = null;
            //  }
        }


        public IDbConnection GetConnection()
        {
            return _connection;
        }
    }

}
