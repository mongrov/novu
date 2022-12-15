import { IsArray, IsDefined, IsString } from 'class-validator';

import { TopicId, ExternalSubscriberId } from '../../types';

import { EnvironmentCommand } from '../../../shared/commands/project.command';

export class RemoveSubscribersCommand extends EnvironmentCommand {
  @IsString()
  @IsDefined()
  topicId: TopicId;

  @IsArray()
  @IsDefined()
  subscribers: ExternalSubscriberId[];
}
