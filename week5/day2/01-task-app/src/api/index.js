import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export const registro = async (email, password) => {
    const response = await supabase.auth.signUp({
        email,
        password
    })
    // TODO identificar el result y retornar lo que nos interesa
    console.log(response)
}

export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
        email,
        password

    })
    return response.data.user.id
}

/*
task: {
            user_id: id,
            title: 'Titulo',
            description: 'Descripcion del task'
        }
*/
export const newTask = async (task) => {
    const response = await supabase.from('task')
        .insert(task)
    // TODO identificar la  respuesta y retornar lo que necesitemos p.ej true si se ha insertado el registro y false si no
    // El response no retorna el id de la task que se ha creado tendremos que volver a hace un getTask para obtener los id
    console.log(response);
}

export const getTasks = async () => {
    const response = await supabase
        .from('task')
        .select('*')
        .order('id', { ascending: false })
    console.log(response)
    // TODO retornar la informacion de los task, ej response.data
}

/*
task: {
            title: 'Titulo modificado',
            description: 'Descripcion del task modificado'
        }
*/
export const updateTask = async (taskId, task) => {

    const response = await supabase
        .from('task')
        .update(task)
        .eq('id', taskId)

    // TODO identificar el resulado y retornar lo que nos interesa, p.ej true si ha ido bien false si ha fallado
    console.log(response)
}

export const deleteTask = async (taskId) => {
    const response = await supabase
        .from('task')
        .delete()
        .eq('id', taskId)
    // TODO identificar el resulado y retornar lo que nos interesa, p.ej true si ha ido bien false si ha fallado
    console.log(response)
}

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    // TODO identificar el resulado y retornar lo que nos interesa, p.ej true si ha ido bien false si ha fallado
    console.log(response)
}