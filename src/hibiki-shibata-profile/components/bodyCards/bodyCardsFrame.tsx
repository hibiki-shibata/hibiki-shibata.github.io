
function bodyCardsFrame({ BodyCard, title, bgColor }: { BodyCard: React.ComponentType; title: string, bgColor?: string }) {
    return (
        <>
            <div className={`${bgColor} p-5 rounded-2xl shadow-lg py-15 font-semibold lg:px-20 px-3 py-18 flex flex-col items-center`}>
                <h2 className='text-3xl font-bold mb-6'>{title}</h2>
                <BodyCard />
            </div>
        </>
    )
}
export default bodyCardsFrame