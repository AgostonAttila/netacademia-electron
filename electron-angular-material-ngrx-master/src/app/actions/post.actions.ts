import {Action} from '@ngrx/store';
import {Post} from '../models/post.model';

export const GET_POST = '[Post] GetPost';

export class GetPost implements Action {
  readonly type = GET_POST;

  constructor(public payload: string) {
  }
}

export const GET_POST_SUCCES = '[Post] Get Post Succes';

export class GetPostSucces implements Action {
  readonly type = GET_POST_SUCCES;

  constructor(public payload: Post) {
  }
}


export const VOTE_UPDATE = '[Post] Vote Update';

export class VoteUpdate implements Action {
  readonly type = VOTE_UPDATE;

  constructor(public payload: {path: string, post: Post}) {
  }
}

export const VOTE_SUCCES = '[Post] Vote Succes';

export class VoteSucces implements Action {
  readonly type = VOTE_SUCCES;

  constructor(public payload: { votes: number }) {
  }
}

export const VOTE_FAIL = '[Post] Vote Fail';

export class VoteFail implements Action {
  readonly type = VOTE_FAIL;

  constructor(public payload?: any) {
  }
}

export type PostActions
  = GetPost
  | GetPostSucces
  | VoteUpdate
  | VoteSucces
  | VoteFail
  ;
