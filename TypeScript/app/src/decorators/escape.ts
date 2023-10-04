export function escape(
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);
        //console.log(`@escape em ação na classe ${this.constructor.name} 
        //                no metodo ${propertKey}`);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        return retorno;
    }

    return descriptor;
}