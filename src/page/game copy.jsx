/*  */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
/* 頁面跳轉 */
import { useNavigate, Link } from "react-router-dom";
/* 顶部文字组件 */
import Inputbox from './inputbox'
/* 规则弹框 */
import Rule from './rule'
export const FatherContext = React.createContext({});
export default function Game (props) {
  /* 获取存储在redux中的状态 */
  let type = Number(useSelector(state => state.type));
  /* 规则弹框显示隐藏 */
  let ruleState = useSelector(state => state.ruleState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* 全局存储单词（正确答案） */
  const [targetWord, settargetWord] = useState(localStorage.getItem('targetWord') === null ? [] : JSON.parse(localStorage.getItem('targetWord')));
  /* 输入框输入的字符 */
  const [currentGuess, setcurrentGuess] = useState(localStorage.getItem('currentGuess') === null ? [] : JSON.parse(localStorage.getItem('currentGuess')));
  /* 结果列表 */
  const [guesslist, setguesslist] = useState(localStorage.getItem('guesslist') === null ? [] : JSON.parse(localStorage.getItem('guesslist')));
  /* 页面初始化获取单词 */
  if (targetWord.length === 0) {
    getTargetWord();
  }
  /* 页面初始化调用 */
  useEffect(() => {
    /* 显示结果列表 */
    showGuesslist()
    /* 显示键盘颜色 */
    showKeyword()
  }, []);// eslint-disable-line
  /* 显示当前选择的难度 */
  function showDegree () {
    if (type === 1) {
      return 'normal'
    } else {
      return 'hard'
    }
  }
  /* 页面键盘点击事件绑定 */
  const keySubmit = (e) => {
    run(e.target.value)
  }
  /* 页面程序运行 */
  function run (val) {
    let size = type === 1 ? 6 : 7;
    let key = val
    var p = /^[A-Za-z]+$/;
    /* 如果输入的为26个英文字母 */
    if (p.test(key) && key.length === 1) {
      /* 追加字符 */
      if (currentGuess.length < size) {
        let guess = currentGuess;/* 当前的单词 */
        guess.push(key.toUpperCase());/* 追加键入的单词 */
        // document.querySelector(`.key[value=${key.toLocaleLowerCase()}]`).classList.add("clicked");
        // setTimeout(function () {
        //   document.querySelector(`.key[value=${key.toLocaleLowerCase()}]`).classList.remove("clicked");
        // }, 100);
        if (currentGuess.length === size) {
          document.querySelector('#enter').classList.remove('ugly')
        }
        /* 设置输入框显示*/
        setcurrentGuess([...guess])
        /* 存储设定的单词 */
        localStorage.setItem('currentGuess', JSON.stringify(currentGuess))
      }
    } else if (key === "Backspace" || key === 'backspace') {
      /* 撤销键入 */
      let guess = currentGuess.slice(0, -1);
      /* 重置输入框显示*/
      setcurrentGuess(guess)
      document.querySelector("#backspace").classList.add("clicked");
      setTimeout(function () {
        document.querySelector("#backspace").classList.remove("clicked");
      }, 100);
      localStorage.setItem('currentGuess', JSON.stringify(guess))
    } else if (key === "Escape" || key === "newgame") {
      restartGame()

    } else if (key === "Enter" || key === "enter") {
      if ([...document.querySelector('#enter').classList].indexOf('ugly') === -1) {
        /* 回车提交 */
        if (currentGuess.length === size) {
          /* 验证结果 */
          Validate()
          document.querySelector("#enter").classList.add("clicked");
          setTimeout(function () {
            document.querySelector("#enter").classList.remove("clicked");
          }, 100);
          /* 清空输入框字符显示 */
          setcurrentGuess([])
          /* 清空本地存储输入框字符 */
          localStorage.setItem('currentGuess', JSON.stringify([]))
        } else {
          /* 输入不足指定位数 */
          alert(`pleace input ${size} characters`)
        }


      }

    }
  }

  /* 重新开始游戏 */
  function restartGame () {
    let result = window.confirm('Congratulations!  Would you like to try again?');
    if (result == true) {
      localStorage.clear()
      /* 跳转首页，重新选择难度开始游戏 */
      navigate(`/home`);
    }
  }
  function newgame () {
    let result = window.confirm('Congratulations!  Would you like to try again?');
    if (result === true) {
      localStorage.clear()
      /* 跳转首页，重新选择难度开始游戏 */
      navigate(`/home`);
    } else {
    }
  }
  /* 验证结果 */
  function Validate () {
    checkSpelling();

  }
  /* 显示结果列表 */
  function showGuesslist () {
    let html = '';
    if (guesslist.length !== 0) {
      guesslist.forEach((ele, i) => {
        html += `<div class="Row">`
        ele.forEach((m, n) => {
          html += `<div class="Row-letter" style="background-color:${m.state}">${m.data}</div>`
        })
        html += `</div>`
      })
    }

    document.querySelector('.game_rows').innerHTML = html;

  }
  /* 添加数据到结果列表 */
  function addGuess (guess) {
    if (guess.length !== 0) {
      let guessdata = guesslist;
      guessdata.push(guess)
      setguesslist(guessdata)
      /* 显示数据 */
      showGuesslist()
      /* 更新输入框字符显示 */
      setcurrentGuess([])
      /* 键盘显示设定 */
      showKeyword();
      localStorage.setItem('guesslist', JSON.stringify(guesslist))
    }
    /* 开始新游戏 */
    // 如果列表没数据开始新游戏
    if (guesslist.length === 0 || guesslist === []) {
      restart();
      getTargetWord();
    } else {
      /* 如果最后一行数据是对的 */
      let exit = guesslist[guesslist.length - 1].every((ele) => {
        return ele.state === 'green';
      })
      if (exit === true) {
        document.querySelectorAll('.key').forEach((ele) => {
          if (ele.value !== 'newgame') {
            ele.classList.add('ugly')
          }
        })
      } else {
        // 如果最后一行数据不对，
        /* 键盘显示对应的颜色 */
        showKeyword()
        /* 如果最后一行数据不对，并且到达了最大次数，则重新开始 */
        // if () {

        // }
      }
    }
  }
  function showKeyword () {
    /* 键盘显示对应的颜色 */
    let result = [];
    guesslist.forEach((ele) => {
      ele.forEach((m) => {
        result.push(m)
      })
    })
    let row = [];
    result.forEach((ele) => {
      if (ele.state === 'green') {
        row.push(ele.data);
        document.querySelectorAll('.key').forEach((m) => {
          if (m.value === ele.data.toLowerCase()) {
            m.classList.add('green')
          }
        })

      } else if (row.indexOf(ele.data) === -1 && ele.state === 'orange') {
        row.push(ele.data);

        document.querySelectorAll('.key').forEach((m) => {
          if (m.value === ele.data.toLowerCase()) {
            m.classList.add('orange')
          }
        })
      } else if (row.indexOf(ele.data) === -1 && ele.state === 'gray') {

        row.push(ele.data);
        document.querySelectorAll('.key').forEach((m) => {
          if (m.value === ele.data.toLowerCase()) {
            m.classList.add('grey')
          }
        })
      }
    })
  }
  /* 验证结果 */
  async function checkSpelling () {
    const response = await fetch(`https://trex-sandwich.com/ajax/word/${currentGuess.join('').toLocaleLowerCase()}`);
    const data = await response.json();
    if (data.valid === true) {
      /* 回答正确 */
      let result = currentGuess.map((ele) => {
        let data = {
          data: ele,
          state: 'green'
        }
        return data;
      })
      /* 重置输入框显示 */
      restart()
      /* 添加数据到结果列表 */
      addGuess(result);
      /* 回答正确重新开始 */
      newgame()
    } else {
      /* 回答错误 */

      let result = [];
      currentGuess.forEach((ele, i) => {
        /* 相同且位置正确 */
        if (targetWord[i] === ele) {
          result.push({
            data: ele,
            state: 'green'
          })
        } else if (targetWord.indexOf(ele) !== -1 && targetWord[i] !== ele) {
          /* 存在但位置不正确 */
          result.push({
            data: ele,
            state: 'orange'
          })
        } else if (targetWord.indexOf(ele) === -1) {
          /* 不存在 */
          result.push({
            data: ele,
            state: 'gray'
          })
        }
      })
      /* 添加数据到结果列表 */
      addGuess(result);
      document.querySelector('#current-guess').classList.add('animate__animated', 'animate__shakeX')

      setTimeout(function () {
        if (document.querySelector('#current-guess')) {
          document.querySelector('#current-guess').classList.remove('animate__animated', 'animate__shakeX')
        }

      }, 3000)
      /* 如果大于指定次数，需要重新开始游戏 */
      if ((type === 1 && guesslist.length === 6) || (type === 2 && guesslist.length === 5)) {
        let result = window.confirm(`Failure,The answer ${targetWord}, whether to restart the game?`);
        if (result === true) {
          localStorage.clear()
          /* 跳转首页，重新选择难度开始游戏 */
          navigate(`/home`);
        }
      }
    }

  }
  /* 全局获取初始化的单词 */
  async function getTargetWord () {
    const words = await getWords(1);
    settargetWord(words.word.toUpperCase().split(''))
    localStorage.setItem('targetWord', JSON.stringify(words.word.toUpperCase().split('')))
  }
  /* 重置输入的内容 */
  function restart () {
    let size = type === 1 ? 6 : 7;
    /* 更新输入框字符显示 */
    setcurrentGuess([])
    localStorage.setItem('currentGuess', JSON.stringify([]));
    if (guesslist.length < size) {
      document.querySelector('#enter').classList.add('ugly')
    }

  };
  /* 获取单词接口 */
  async function getWords (count) {
    const response = await fetch(`https://trex-sandwich.com/ajax/word?count=${count}&length=${type === 1 ? 6 : 7}`);
    const data = await response.json();
    const targetWord = data[0];
    settargetWord(data[0])
    return targetWord
  }
  return (
    <div id='game'>
      <div className='fl level'>Current difficulty level：{showDegree()}</div>
      <div className='fr'>
        <button className='defaultbtn' onClick={() => {
          dispatch({
            type: "showruleState"
          });
        }}>Rule</button>
        <Link to="/home" className='defaultbtn'>Home</Link>
      </div>
      <div className='fl level'>The number of attempts remaining：{type === 1 ? (6 - guesslist.length) : (5 - guesslist.length)}</div>
      <FatherContext.Provider value={currentGuess}>
        <Inputbox />
      </FatherContext.Provider>
      <hr />
      <div className="game_rows">
      </div>
      <hr />
      <div id="keyboard">
        <div className="row">
          <button className="key" value="q" onClick={keySubmit}>Q</button>
          <button className="key" value="w" onClick={keySubmit}>W</button>
          <button className="key" value="e" onClick={keySubmit}>E</button>
          <button className="key" value="r" onClick={keySubmit}>R</button>
          <button className="key" value="t" onClick={keySubmit}>T</button>
          <button className="key" value="y" onClick={keySubmit}>Y</button>
          <button className="key" value="u" onClick={keySubmit}>U</button>
          <button className="key" value="i" onClick={keySubmit}>I</button>
          <button className="key" value="o" onClick={keySubmit}>O</button>
          <button className="key" value="p" onClick={keySubmit}>P</button>
          <button id="backspace" className="key" value="backspace" onClick={keySubmit}>Backspace</button>
        </div>
        <div id="row-2" className="row">
          <button className="key" value="a" onClick={keySubmit}>A</button>
          <button className="key" value="s" onClick={keySubmit}>S</button>
          <button className="key" value="d" onClick={keySubmit}>D</button>
          <button className="key" value="f" onClick={keySubmit}>F</button>
          <button className="key" value="g" onClick={keySubmit}>G</button>
          <button className="key" value="h" onClick={keySubmit}>H</button>
          <button className="key" value="j" onClick={keySubmit}>J</button>
          <button className="key" value="k" onClick={keySubmit}>K</button>
          <button className="key" value="l" onClick={keySubmit}>L</button>
          <button id="enter" className="key" value="enter" onClick={keySubmit}>Enter</button>
        </div>
        <div id="row-3" className="row">
          <button className="key" value="z" onClick={keySubmit}>Z</button>
          <button className="key" value="x" onClick={keySubmit}>X</button>
          <button className="key" value="c" onClick={keySubmit}>C</button>
          <button className="key" value="v" onClick={keySubmit}>V</button>
          <button className="key" value="b" onClick={keySubmit}>B</button>
          <button className="key" value="n" onClick={keySubmit}>N</button>
          <button className="key" value="m" onClick={keySubmit}>M</button>
          <button id="new-game" className="key" value="newgame" onClick={keySubmit}>New Game</button>
        </div>
      </div>
      {/* 规则弹框 */}
      {ruleState === true ? <Rule /> : ''}

    </div>
  );
}