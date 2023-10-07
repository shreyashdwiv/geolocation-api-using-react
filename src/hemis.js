const Hemis=({latitude})=>{
   const hemisphere= latitude>0?"northern hemis":"southern hemis"
    return (
        <div>{hemisphere}</div>
    )
}

export default Hemis;