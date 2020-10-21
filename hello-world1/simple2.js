function LikeButton() {
    const [liked , setLiked] = React.useState(false);
    console.log(typeof(liked));
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

ReactDOM.render(
    React.createElement(LikeButton),document.querySelector('#react-root1'),
);


ReactDOM.render(
    React.createElement(LikeButton),document.querySelector('#react-root2'),
);


ReactDOM.render(
    React.createElement(LikeButton),document.querySelector('#react-root3'),
);