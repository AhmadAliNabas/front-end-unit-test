import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PostService} from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PostService
      ],
    });

    postService = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, () => {
    const postItem = [
      {
        "userId": 1,
        "id": 1,
      },
      {
        "userId": 2,
        "id": 2,
      },
      {
        "userId": 3,
        "id": 3,
      }
      ];
      postService.getPosts()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });

    let req = httpMock.expectOne('...');
    expect(req.request.method).toBe("GET");

    req.flush(postItem);
    httpMock.verify();

  });
});
