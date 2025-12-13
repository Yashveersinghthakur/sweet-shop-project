import bcrypt from 'bcrypt';
import { query } from '../config/database';

export class UserModel {
  static async create(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    const result = await query(
      'INSERT INTO users (email, password_hash) VALUES ($1,$2) RETURNING *',
      [email, hash]
    );
    return result.rows[0];
  }

  static async findByEmail(email: string) {
    const result = await query('SELECT * FROM users WHERE email=$1', [email]);
    return result.rows[0] || null;
  }

  static async verifyPassword(user: any, password: string) {
    return bcrypt.compare(password, user.password_hash);
  }
}
