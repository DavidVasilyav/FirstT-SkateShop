 export default function setTimeOutFunction () {
    return setTimeout(() => {
        setError('הזן כתובת איימיל');
        return setLoading(true);
      }, 2500);
}