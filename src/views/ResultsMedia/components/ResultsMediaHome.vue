<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: '新闻标题 1',
        },
      ],
    };
  },
};
</script>
<template>
  <div class="Main__inner">
    <div class="Main__guide">
      <ol class="main-breadcrumb">
        <li>
          <router-link to="/" style="text-decoration: none;color: #333;">
            <span class="main-breadcrumb__type--nolink">{{ $t('MediaList.HomeTitle') }}</span>
          </router-link>
        </li>
        <li class="last-item">
          <span class="main-breadcrumb__type--nolink">{{ $t('MediaList.Update') }}</span>
        </li>
      </ol>
      <!--/Main__guide-->
    </div>
  </div>
  <router-view></router-view>
  <div class="Main__body">
    <div class="Main__head">
      <div class="heading1">
        <div class="heading1__inner">
          <h1 class="heading1__title">{{ $t('MediaList.Update') }}</h1>
        </div>
      </div>
      <!--/Main__head-->
    </div>
    <div class="Main__content">
      <div class="pulldown-navi">
        <!-- <div class="pulldown-navi__inner">
            <select class="pulldown-navi__select js-pulldown-navi">
              <optgroup label="">
                <option value>年度を選択してください</option>
                <option value="/news/2023/">2023年度</option>
                <option value="/news/2022/">2022年度</option>
                <option value="/news/2021/">2021年度</option>
                <option value="/news/2020/">2020年度</option>
                <option value="/news/2019/">2019年度</option>
                <option value="/news/2018/">2018年度</option>
                <option value="/news/2017/">2017年度</option>
              </optgroup>
            </select>
          </div> -->
      </div>
      <div class="news" data-news-pc="row">
        <article class="news__article">
          <div  class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date">{{ $t('MediaList.Media1.Date') }}</time>
                <div class="news__category"><i class="util-badge--events">{{ $t('MediaList.Media1.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link :to=" $t('MediaList.Media1.Link') "
                    class="override-link-style">
                    {{ $t('MediaList.Media1.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
        <article class="news__article">
          <div class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date" datetime="2023-08-02">{{ $t('MediaList.Media2.Date') }}</time>
                <div class="news__category"><i class="util-badge--news">{{ $t('MediaList.Media2.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link
                    :to="$t('MediaList.Media2.Link')"
                    class="override-link-style">
                    {{ $t('MediaList.Media2.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
        <article class="news__article">
          <div class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date" datetime="2023-07-26">{{ $t('MediaList.Media3.Date') }}</time>
                <div class="news__category"><i class="util-badge--cat1612">{{ $t('MediaList.Media3.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link :to="$t('MediaList.Media3.Link')" class="override-link-style">
                    {{ $t('MediaList.Media3.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
        <article class="news__article">
          <div class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date">{{ $t('MediaList.Media4.Date') }}</time>
                <div class="news__category"><i class="util-badge--news">{{ $t('MediaList.Media4.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link :to="$t('MediaList.Media4.Link')"
                    class="override-link-style">
                    {{ $t('MediaList.Media4.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
        <article class="news__article">
          <div class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date" datetime="2023-07-19">{{ $t('MediaList.Media5.Date') }}</time>
                <div class="news__category"><i class="util-badge--cat1612">{{ $t('MediaList.Media5.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link :to="$t('MediaList.Media5.Link')"
                    class="override-link-style">
                    {{ $t('MediaList.Media5.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
        <article class="news__article">
          <div class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date" datetime="2023-07-12">{{ $t('MediaList.Media6.Date') }}</time>
                <div class="news__category"><i class="util-badge--news">{{ $t('MediaList.Media6.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link :to="$t('MediaList.Media6.Link')" class="override-link-style">
                    {{ $t('MediaList.Media6.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
        <article class="news__article">
          <div class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date" datetime="2023-07-11">{{ $t('MediaList.Media7.Date') }}</time>
                <div class="news__category"><i class="util-badge--news">{{ $t('MediaList.Media7.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link :to="$t('MediaList.Media7.Link')" class="override-link-style">
                    {{ $t('MediaList.Media7.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
        <article class="news__article">
          <div class="news__type">
            <div class="news__body">
              <div class="news__property">
                <time class="news__date" datetime="2023-06-20">{{ $t('MediaList.Media8.Date') }}</time>
                <div class="news__category"><i class="util-badge--events">{{ $t('MediaList.Media8.Category') }}</i></div>
              </div>
              <div class="news__caption">
                <h3 class="news__title">
                  <router-link :to="$t('MediaList.Media8.Link')" class="override-link-style">
                    {{ $t('MediaList.Media8.Title') }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>

</template>
<style scoped>
body *,
body :after,
body :before {
  box-sizing: border-box;
}

.Main__body {
  min-width: 1390px;
}

.Main__content {
  max-width: 1264px;
  padding: 4em 30px 100px;
  margin: 0 auto;
}

.Main__guide .main-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 13px 40px 11px;

}

.Main__guide .main-breadcrumb>li {
  font-size: 1rem;
}

.Main__guide li,
.Main__guide ol {
  margin: 0;
  padding: 0;
  list-style-type: none;

}

.Main__guide .main-breadcrumb>li:after {
  margin: 0 10px;
  color: #666;
  content: "＞";
}

.Main__guide .main-breadcrumb>li.last-item:after {
  content: "";
}

.override-link-style {
  text-decoration: none;
  color: #333;
}

.Main__guide .main-breadcrumb>li>span {
  color: #333;
  font-weight: 700;
  text-decoration: none;
}

.heading1,
.heading1--center {
  width: 1264px;
  margin-left: 0;
}

.heading1 {
  display: flex;
  align-items: center;
  width: auto;
  justify-content: flex-start;
  margin-bottom: 0;
  padding: 1.5em 0;
  background-color: #454545;
  color: #fff;
}

.heading1__inner {
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  padding: 0 32px;
}

.Main__content {
  max-width: 1264px;
  padding: 4em 32px 100px;
}

.Main__content {
  margin: 0 auto;
}

.Main__content>:first-child,
.Main__content>[class^=list-wrap]>:first-child,
.Main__content>section:first-child>:first-child {
  margin-top: 0 !important;
}

.pulldown-navi {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 2em 0 0;
}

.pulldown-navi__inner {
  display: block;
  min-width: 273px;

}

.pulldown-navi__select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  color: #fff;
  line-height: 1.4;
  cursor: pointer;
}

.pulldown-navi__inner {
  position: relative;
  border: 1px solid #666;
  background-color: #454545;
  display: inline-block;
  order: 1;
  min-width: 273px;
  transition: background-color .25s cubic-bezier(.4, 0, .2, 1) 0s, border-color .25s cubic-bezier(.4, 0, .2, 1) 0s;
  position: relative;
  border: 1px solid #666;

}

.pulldown-navi__inner:hover {
  background-color: #fff;
}

.pulldown-navi__inner:hover>.pulldown-navi__select {
  color: #454545;
}

div.Main__body .pulldown-navi__inner .pulldown-navi__select {
  border: none !important;
}

.pulldown-navi__select {
  padding: .8em 3.6em .8em 1.4em;
  font-size: 1rem;
  font-weight: 700;

}

.pulldown-navi__select option {
  color: #454545;
  font-weight: 500;
}

.Main__content>:last-child {
  margin-bottom: 0 !important;
}

.news {
  margin: 1.2em 0 0;
  border-top: 1px solid #e0e0e0;
}

.news__article {
  border-bottom: 1px solid #e0e0e0;
}

.news .news__type,
.news .news__type--blank,
.news .news__type--excel,
.news .news__type--modal,
.news .news__type--nolink,
.news .news__type--pdf,
.news .news__type--powerpoint,
.news .news__type--rss,
.news .news__type--video,
.news .news__type--word,
.news .news__type--zip {
  padding: 1.2em 0;
  display: flex;
  align-items: flex-start;
  background-color: #fff;

}

.news__type,
.news__type--blank {
  color: #454545;
  text-decoration: none;
}

.news__caption:hover {
  text-decoration-line: underline;
}

.news[data-news-pc=row] .news__body {
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
}

.news__body {
  flex: 1 1;
  order: 1;
}

.news__property {
  display: flex;
  align-items: baseline;
}

.news__date {
  font-size: 1rem;
  line-height: 22px;
  min-width: 10.5em;
  color: #999;
  font-weight: 700;
  white-space: nowrap;
}

.news[data-news-pc=row] .news__category {
  flex-direction: column;
  margin-right: 26px;
}

.news__category {
  display: inline-flex;
  flex-flow: row wrap;
  margin-bottom: -.83333em;
}

.util-badge--csr,
.util-badge--events,
.util-badge--ir,
.util-badge--news,
.util-badge--other,
.util-badge--release {
  background-color: #454545;
}

[class*=util-badge--] {
  background-color: #454545;
  color: #fff;
}

.news[data-news-pc=row] .news__category>* {
  margin-right: 0;
}

[class*=util-badge--] {
  min-width: 104px;
  height: 25px;
  padding: 1px 10px 0;
  font-size: 0.8rem;
  line-height: 19px;
}

.util-badge,
[class*=util-badge--] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  text-align: center;
  vertical-align: middle;
}

.news__caption {
  flex: 1 1;
}

.news .news__type .news__title {
  position: relative;
  line-height: 1.6em;
}

.news__title {
  font-size: 1rem;
}

.news__title {
  margin: 0;
  font-weight: 400;
}
</style>