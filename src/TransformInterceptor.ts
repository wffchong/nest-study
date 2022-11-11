import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Request } from 'express'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('拦截器前')

        const request = context.switchToHttp().getRequest() as Request
        const startTime = Date.now()

        return next.handle().pipe(
            map((data) => {
                const endTime = Date.now()
                new Logger().error(`TIME:${endTime - startTime}\tURL:${request.path}\tMETHOD:${request.method}`)
                // 这样返回的数据都会被包裹在data里面
                return {
                    data
                }
            })
        )
    }
}
