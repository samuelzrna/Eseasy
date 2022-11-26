using Eseasy.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Eseasy.Infrastructure.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        void BeginTransaction();
        void Commit();
        IDbTransaction GetTransaction();
        IDbConnection GetConnection();
        void RollBackTransaction();
    }
}
