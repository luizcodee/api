# Database Setup

## Como usar:

1. Abra o MySQL Workbench ou terminal MySQL
2. Execute o arquivo `create_database.sql`
3. Atualize o arquivo `.env` com:
   ```
   DATABASE=api_database
   PASSWORD=sua_senha_mysql
   ```

## Comandos MySQL:
```bash
mysql -u root -p < database/create_database.sql
```