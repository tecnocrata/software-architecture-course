import { UserEntity } from '@/core/domain/entities/user.entity';
import { UsersRepository } from '@/core/repositories/users.repository';
import { PrismaService } from '@/infra/data/prisma/prisma.service';

export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: UserEntity): Promise<UserEntity> {
    return this.prisma.user.create({ data });
  }

  async findAll(filter?: Partial<UserEntity>): Promise<UserEntity[]> {
    return this.prisma.user.findMany({ where: filter });
  }

  async findOne(filter: Partial<UserEntity>): Promise<UserEntity> {
    const { id, ...rest } = filter;
    return this.prisma.user.findUnique({
      where: { id: id ?? undefined, ...rest },
    });
  }

  async update(id: number, data: Partial<UserEntity>): Promise<UserEntity> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
