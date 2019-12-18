---
path: '/posts/react/2'
date: '2019-12-16'
title: 'My first blog post'
---

두번째 리액트 게시글

#h1
##h2
###h3

> this is a blockquote

1. first
2. second
3. third

- hi
  - hi
    - hihi

```javascript
var lines = ['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'];

var seconds = [60 * 60 * 24 * 30 * 12, 60 * 60 * 24 * 30, 60 * 60 * 24, 60 * 60];

var startend;

function solve(line, index0) {
  var sec = 0;
  var arr = line.split(' ');
  arr.map((item, index) => {
    // 2016-09-15 20:59:57.421 0.351s
    if (index === 0) {
      // 2019-06-15
      var subarr = item.split('-');
      subarr.map((item2, index2) => {
        sec += seconds[index2] * item2;
      });
    } else if (index === 1) {
      // 20:59:57.421
      var subarr = item.split(':');
      subarr.map((item2, index2) => {
        // 20h 59m 57.421s,
        if (index2 == 2) {
          sec += parseFloat(item2);
          return;
        }
        sec += seconds[index2 + 2] * item2;
      });
    } else if (index === 2) {
      // 0.351s
      var duration = parseFloat(item.substr(0, item.length - 1), 10); // 0.3
      var startTime = parseFloat((sec - duration + 0.001).toFixed(3));
      startend[index0].push(startTime);
      startend[index0].push(sec);
      console.log(startend);
    }
  });
}

function solution(lines) {
  startend = Array(lines.length)
    .fill(null)
    .map(() => Array());
  lines.map((line, index) => {
    solve(line, index);
  });
  startend.sort((a, b) => {
    return a[0] - b[0];
  });
  var startSec = startend[0][0];
  var endSec = startend[startend.length - 1][1];

  var count, startTime, endTime, windowStartTime, windowEndTime, maxCount;
  startend.map((item, index) => {
    for (let j = 0; j <= 1; j++) {
      // 각 라인에 대하여
      maxCount = 0;
      count = 0;
      if (j == 0) {
        // 스타트 기점으로 윈도우 만들기
        count = 0;
        windowStartTime = startTime;
        windowEndTime = startTime + 0.999;
      } else if (j == 1) {
        // 엔드 시점으로 윈도우 만들기
        windowStartTime = endTime;
        windowEndTime = endTime + 0.999;
      }
      for (let i = 0; i < startend.length; i++) {
        // 다른 모든 라인에 슬라이딩 윈도우가 포함되는지 검사.
        startTime = startend[i][0];
        endTime = startend[i][1];
        if (windowStartTime >= startTime || windowEndTime <= endTime) {
          // 여기 조건문이 틀렸음.
          console.log(startTime, endTime, windowStartTime, windowEndTime);
          count++;
        }
        console.log('\n');
      }
      maxCount = Math.max(count, maxCount);
    }
  });

  console.log(maxCount);
  return maxCount;
}

solution(lines);
```

---

<https://www.naver.com>

**강조**
