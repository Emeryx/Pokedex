const snakeToTitleCase = (snakeStr: string) => {
    return snakeStr.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
export default snakeToTitleCase