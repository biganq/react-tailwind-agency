const SectionHeading = (props) =>{
    const {title,subTitle} = props
    return(
        <>
          <h2 className="text-4xl font-black text-center">{title}</h2>
          <p className="text-xl mt-4 text-center text-gray-500">{subTitle}</p>
        </>
    )

}

export default SectionHeading