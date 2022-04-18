import SHPsContent from "./SHPsContent"





const CardBox = ({ SHPsDoc, getSellerId, currentUserId }) => {




    return <>

        <SHPsContent SHPsDoc={SHPsDoc} getSellerId={getSellerId} currentUserId={currentUserId} />
    </>
}

export default CardBox