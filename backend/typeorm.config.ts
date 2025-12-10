import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'prueba1234',
  database: 'prueba',
  synchronize: false,
  entities: ['src/**/*.entity{.ts, .js}'],
  migrations: ['./src/migrations/*.ts'],
});
