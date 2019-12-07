import { RESTDataSource } from 'apollo-datasource-rest';
import to from 'await-to-js';
import { SHARD_INFO_API_URL } from '../utils/config';

export class ShardInfoDataSource extends RESTDataSource {
  baseURL = SHARD_INFO_API_URL;

  async getShardInfo(shardId, shardName) {
    const [error, data] = await to(
      this.get(`?shard-id=${shardId}&shard-name${shardName}`)
    );
    if (error) {
      throw error;
    }
    return data;
  }