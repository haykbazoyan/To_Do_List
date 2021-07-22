export default function Button({onClick, isDisable, btnName}) {
    return (
        <button className='bg-transparent hover:bg-green-700 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded mr-2 mb-2' type='button' onClick={onClick} isDisable={isDisable}>{btnName}</button>
    )
}
