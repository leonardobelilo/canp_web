import { IProduct } from "@/app/types/types";
import { BedDouble, Car, Ruler, ShowerHead } from "lucide-react";



export  function ListFeaturesHome({product}:{product:IProduct}) {
    // const Demo = styled('div')(({ theme }) => ({
    //   backgroundColor: theme.palette.background.paper,
    // }));
    // const [dense, setDense] = React.useState(false);
    // const [secondary, setSecondary] = React.useState(false);
  
    return (
      <div className="flex   mb-[32px] wrap items-center justify-center gap-5" >
              <div className="flex gap-5">
                  <BoxFeature title={`${product.area}M² Area`} >
                        <Ruler className="items-center " color="white" size={"3rem"} style={{fontSize:"3rem"}} />
                  </BoxFeature>
  
                  <BoxFeature title={`${product.bedrooms} Quartos`} >
                        <BedDouble size={"3rem"} color="white" style={{fontSize:"3rem"}} />
                  </BoxFeature >
              </div>
              <div className="flex gap-5">
  
                  <BoxFeature title={`${product.bathrooms} Banheiros`} >
                        <ShowerHead size={"3rem"} color="white" style={{fontSize:"3rem"}} />
                  </BoxFeature >
  
                  <BoxFeature title={`${product.garages} Garagens`} >
                        <Car size={"3rem"} color="white"  />
                  
                  </BoxFeature >
              </div>
      </div>
    );
  }
  
  function BoxFeature({children, title}:{title:string,children:React.ReactNode}){
      return(
          <div className="rounded-full flex radius-100 flex-col m-auto items-center justify-center m-w-[300px] m-w-[140px] " style={{display:"flex", alignContent:'center', justifyContent:'center', justifyItems:"center", alignItems:"center"}}>
          <div className=" rounded-full color-white items-center justify-center bg-primaryPalet w-[4rem] h-[4rem] gap-3" style={{display:"flex",alignContent:'center', justifyContent:'center', justifyItems:"center", alignItems:"center"}} >
              {children}
          </div>
              <p  className=" font-bold text-center text-primaryPalet text=[1.2rem] text-center">{title}</p>
          </div>
      )
  }