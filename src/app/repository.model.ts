import { SimpleDataSource} from './datasource.model';
import { Product} from './product.model';


export class ProductRepository{

    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor(){
        this.dataSource=new SimpleDataSource();
        this.products=new Array<Product>();

        this.dataSource.getProduct().forEach(p=>this.products.push(p));
    }
    getProducts(): Product[] {

        return this.products;
    }

    getProductById(id:number):Product{
        return this.products.find(p=>p.id==id);
    }

    addProduct(product){
        this.products.push(product);
    }

    deleteProduct(product:Product){
        let index = this.products.indexOf(product);
        this.products.splice(index,1);
        /* const  id=product.id;
        this.products.filter(p=>p.id===product.id);
        console.log(this.products); */

    }

}