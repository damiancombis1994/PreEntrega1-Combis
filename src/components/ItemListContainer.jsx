import CardProduct from "./CardProduct";

function ItemListContainer(){

const boxGaleria={
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap:20,
};

 return(

    <div style={boxGaleria}>

    <CardProduct price={2500} text="Muga" img="https://www.bodegasmuga.com/tienda/wp-content/uploads/sites/4/2021/05/muga-reserva-se-botella-600x600.jpg" />

    <CardProduct price={1800} text="Zuccardi" img="https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060860_f.jpg" />
    
    <CardProduct price={2000} text="Bendiciones" img="https://bodegasconventodelasclaras.com/wp-content/uploads/vinos-tienda-bendiciones.jpg" />

    <CardProduct price={3000} text="Resero" img="https://i0.wp.com/www.alpuntodeventa.com.ar/wp-content/uploads/3505-Vino-Resero-Tinto-Clasico-Botella-x-700-ml.jpg?fit=1200%2C1200&ssl=1" />

    <CardProduct price={3500} text="Bicus Orbis" img="https://jumbo.com.do/pub/media/catalog/product/cache/e5145626c3f3275a7b4b1f65af9095fa/2/2/2219792-a.jpg" />

    <CardProduct price={4500} text="Laura Hartwing" img="https://laurahartwig.cl/wp-content/uploads/2022/05/cabernet-franc.jpg" />

    <CardProduct price={1000} text="Circus" img="https://dcdn.mitiendanube.com/stores/398/294/products/v-circus-malbec-roble-6x7501-c47273e4bb9aa31ec715893795018009-640-0.jpg" />

    <CardProduct price={4500} text="Septima" img="https://www.15bodegas.com/media/catalog/product/b/o/botella-septima-malbec_1.jpg"/>

    <CardProduct price={5500} text="Mauro VS" img="https://hips.hearstapps.com/hmg-prod/images/20-1654411778.jpg?resize=640:*"/>

    <CardProduct price={7500} text="Latitud" img="https://dcdn.mitiendanube.com/stores/398/294/products/v-latitud-33-malbec-6x7501-6a53c68b637cb61eb115894654976425-640-0.jpg"/>

    <CardProduct price={6000} text="Dada" img="https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3063595_f.jpg"/>

    <CardProduct price={5000} text="Durigutti" img="https://d22fxaf9t8d39k.cloudfront.net/3fe6963acb8b2465fbbf82664c6061c08ab4e92b99f9f39adb637652fa7d8913203857.jpg"/>

    </div>
 ); 

};


export default ItemListContainer;