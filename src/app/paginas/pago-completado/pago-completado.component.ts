import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-completado',
  templateUrl: './pago-completado.component.html',
  styleUrls: ['./pago-completado.component.css']
})
export class PagoCompletadoComponent {
  constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {}

  descargarFactura(): void {
  const carritoActual = this.carritoService.obtenerCarrito(); // obtiene el carrito actual
  const xml = this.carritoService.generarXML(carritoActual); // pasa el carrito como parámetro
  this.carritoService.descargarXML(xml);
  this.carritoService.vaciarCarrito();
  this.router.navigate(['/catalogo']);
}


  volverAlCatalogo(): void {
    this.carritoService.vaciarCarrito();
    this.router.navigate(['/catalogo']);
  }
}