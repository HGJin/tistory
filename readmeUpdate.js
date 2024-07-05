import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# 안녕하세요! 🙋‍♂️

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=HGJin)](https://github.com/anuraghazra/github-readme-stats)
<!--
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=HGJin&layout=compact&hide=r,jupyter%20notebook,c%23&exclude_repo=roharui.github.io)](https://github.com/anuraghazra/github-readme-stats)
-->
<!--
## 이런 환경에 익숙해요✍🏼

## 언어

<p>
  <img alt="" src= "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> 
  <img alt="" src= "https://img.shields.io/badge/TypeScript-black?logo=typescript&logoColor=blue"/>
</p>
-->
## 이메일 💻

hjindata@gmail.com

## 📝 블로그 최신 글
<div style="display: flex; flex-direction: row;">
    <div style="margin-right: 10px;">
        <a href="https://hjindata.tistory.com/">
            <img src="https://github.com/HGJin/tistory/blob/e35e6767cef7d139a31c75581ae47e5a76940263/logo/tistory.png?raw=true" width="100" height="50" />
        </a>
    </div>
    <div>
        <a href="https://adventurous-pamphlet-28c.notion.site/DA-Data-Analyst-d609592479e144c9ba8ea716122ef05c/">
            <img src="https://github.com/HGJin/tistory/blob/e35e6767cef7d139a31c75581ae47e5a76940263/logo/notion.png?raw=true" width="100" height="50" />
        </a>
    </div>
</div>


`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://hjindata.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 7; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();

