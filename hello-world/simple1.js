function LikeButton() {
    const [liked , setLiked] = React.useState(false);
    // 초기값과 함께 컴포넌트의 상탯값을 정의한다. 
    // 여기서 React 변수는 react.development.js 파일에서의 전역 변수로 생성
    const text = liked ? '좋아요 취소 ' : '좋아요';
    return React.createElement(
        // createElement 함수는 리액트 요소를 반환한다.
        'button',
        {onClick: () => setLiked(!liked)},
        // 버튼을 누를시 onclick 함수가 호출되고 컴포넌트의 상탯값이 변경된다.
        text,
    );
}
const domContainter = document.querySelector('#react-root');
// html 에 만들어두었던 돔요소를 가지고 온다,
ReactDOM.render(React.createElement(LikeButton),domContainter);
// react-domContainter.development 파일에서 전역 변수로 만든 ReactDOM 변수를
// 사용해서 만든 컴포넌트를 react-dom 요소에 붙힌다