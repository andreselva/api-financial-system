CREATE TABLE revenue (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name varchar(50),
    description VARCHAR(120),
    value DECIMAL(10 , 2 ),
    invoiceDueDate DATE,
    idCategory BIGINT NOT NULL
)