import React, { useState, useCallback } from 'react';
import * as S from './style';

import { Paper } from '../../../components';
import { IPost } from '../../../types/post';
import { defaultProfile } from '../../../assets/imgs';

interface Props {
  post?: IPost;
}

function ActivityCard({ post }: Props): React.ReactElement {
  const id = post?.id;
  const title = post?.title;
  const date = post?.updatedAt;
  const content = post?.content;
  // default
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <img src="../../../assets/imgs" />
          <b>{id}</b> created a repository{' '}
          <b>
            {id}/{title}
          </b>{' '}
          {date}
        </S.TitleWrapper>
        <S.Paper>
          <S.PaperTitle>
            <b>
              {id}/{title}
            </b>
            <button>d</button>
          </S.PaperTitle>
          {content}
          <br />
          {date}
        </S.Paper>
      </S.Wrapper>
      <S.divline />
    </>
  );
}

export default React.memo(ActivityCard);
