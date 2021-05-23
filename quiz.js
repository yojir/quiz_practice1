 const quiz = [
   {
    question: '横浜Denaベイスターズの現在のキャプテンは誰？',
    answers: ['佐野恵太','筒香嘉智', '石川雄洋', '村田修一'],
    correct: '佐野恵太'
   },
   {
    question: '横浜Denaベイスターズの背番号99は？',
    answers: ['佐野恵太','宮崎敏郎', 'ネフタリソト', 'タイラーオースティン'],
    correct: 'ネフタリソト'
   },
   {
    question: 'プロ野球セリーグにおいて昨シーズンの4位の球団はどれ？',
    answers: ['巨人','阪神', 'ベイスターズ', 'ソフトバンク'],
    correct: 'ベイスターズ'
   },
   {
    question: '昨シーズンのセリーグのホームラン王は？',
    answers: ['村上宗隆','鈴木誠也', '佐野恵太', '岡本和真'],
    correct: '岡本和真'
   },
   {
    question: '昨シーズンの日本1は？',
    answers: ['横浜','巨人', 'ソフトバンク', '楽天'],
    correct: 'ソフトバンク'
   }
  ];
 
const quizLength = quiz.length;
let quizIndex = 0;
let $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
let correctNumber = 0;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
  if(e.target.textContent === quiz[quizIndex].correct){
    window.alert('正解！');
    correctNumber++;
  }else{
    window.alert('不正解！');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  }else{ 
    document.getElementById('js-question').textContent = '終わりです。お疲れさまでした。あなたは'+quizLength+'問中'+correctNumber+'問正解です！';
    document.getElementById("button1").style.visibility ="hidden";
    document.getElementById("button2").style.visibility ="hidden";
    document.getElementById("button3").style.visibility ="hidden";
    document.getElementById("button4").style.visibility ="hidden";
  } 
};


let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  }); 
  handleIndex++;
}


    




