export const getAllParams = (arr: any[], paramName: string) => {
    const params: any[] = [];
    
    arr.forEach(item => {
        const name = item[paramName];
        const index = params.findIndex(p => p.name === name);

        if (index !== -1) {
            params[index].count += 1;
        } else {
            params.push({ name, count: 1 });
        }
    });

    return params;
}