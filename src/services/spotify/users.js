import clienteAxios from "../../config/axios";

export const User = {
    get: () => {
        clienteAxios.get('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem("access_token") },
        })
            .then(respuesta => {
                return respuesta.data;

            }).catch(
                err => {
                    console.log(err)
                    return err;
                }
            )

    }
}