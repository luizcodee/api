-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS api_database;

-- Usar o banco de dados
USE api_database;

-- Criar tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de produtos
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados de exemplo
INSERT INTO users (name, email, password) VALUES 
('João Silva', 'joao@email.com', '$2b$10$example'),
('Maria Santos', 'maria@email.com', '$2b$10$example');

INSERT INTO products (name, price, description) VALUES 
('Produto A', 29.99, 'Descrição do produto A'),
('Produto B', 49.99, 'Descrição do produto B');


--.env
--PORT=3000
--HOST=localhost
--USER=root
--PASSWORD=
--DATABASE=api_database