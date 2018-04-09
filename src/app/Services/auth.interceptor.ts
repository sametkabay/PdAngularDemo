import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/do';

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = localStorage.getItem('accessToken');
        const newReq = req.clone({
            headers: req.headers.set(
                'Authorization', 'Bearer ' + token
            )
        });
        return next.handle(newReq);
    }

}