import {Controller, Get, Post, Body, Param, Patch, Delete} from "@nestjs/common";
import {ProductService} from "./product.service";


@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('add')
    addProduct(@Body('title') title: string,
               @Body('desc') desc: string,
               @Body('price') price: number) {
        const generatedId = this.productService.insertProduct(title, desc, price);
        return generatedId;
    }

    @Get()
    getAllProducts() {
        return this.productService.fetchProducts();
    }

    @Get(':id')
    getProductById(@Param('id') prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: string,
                  @Body('title') prodTitle: string,
                  @Body('desc') prodDesc: string,
                  @Body('price') prodPrice: number) {

        this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string){
        this.productService.deleteProduct(prodId);
    }
}
