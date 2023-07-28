export default  () =>
    {
        function get( path, callback){
            router["GET"][path] = callback ;
        }
    }