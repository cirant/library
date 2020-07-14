  const getObjDate = (strDate) => {
    if(!strDate) return null;
    const arrayNewDate = strDate.split('/');
    return new Date(Number(arrayNewDate[0]), Number(arrayNewDate[1]), Number(arrayNewDate[2]));
  }
  
  export default { getObjDate };