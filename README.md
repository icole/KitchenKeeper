# Setup Steps

- Start SQL Server Docker `SQL_SA_PASS="<PASS> docker-compose up`
- Set local user-secret `dotnet user-secrets set "DbPassword" "<PASS>"`
- Install Entity Framework `dotnet tool install --global dotnet-ef`
- Migrate both contexts
  - `dotnet ef database update --context ApplicationDbContext`
  - `dotnet ef database update --context GraphqlDbContext`
