import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {GET_POST, GetPost, GetPostSucces, VOTE_UPDATE, VoteFail, VoteSucces, VoteUpdate} from '../actions/post.actions';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from '../models/post.model';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostEffects {

  @Effect()
  getPost: Observable<Action> = this.actions.ofType(GET_POST)
    .switchMap((action: GetPost) =>
      this.http.get<Post>(environment.firebase.databaseURL + action.payload)
    )
    .map(resp => new GetPostSucces(resp))
  ;

  @Effect()
  voteUpdate: Observable<Action> = this.actions.ofType(VOTE_UPDATE)
    .switchMap((action: VoteUpdate) =>
      this.http.patch<{ votes: number }>(
        environment.firebase.databaseURL + action.payload.path,
        {votes: action.payload.post.votes}
      ))
    .map(resp => new VoteSucces(resp))
    .catch(err => of(new VoteFail()))
  ;

  constructor(private actions: Actions, private http: HttpClient) {
  }
}
