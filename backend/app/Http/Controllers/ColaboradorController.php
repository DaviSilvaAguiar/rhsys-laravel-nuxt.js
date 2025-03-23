<?php

namespace App\Http\Controllers;

use App\Models\Colaborador;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ColaboradorController extends Controller
{
   
    // Exibir todos os colaboradores
    public function index()
    {
        $colaboradores = Colaborador::all(); // Recupera todos os colaboradores
        return response()->json($colaboradores); // Retorna como JSON
    }

    // Exibir um colaborador específico
    public function show($id)
    {
        $colaborador = Colaborador::find($id); // Encontra o colaborador pelo ID

        if (!$colaborador) {
            return response()->json(['message' => 'Colaborador não encontrado'], 404);
        }

        return response()->json($colaborador); // Retorna o colaborador como JSON
    }

    // Criar um novo colaborador
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nome_completo' => 'required|string|max:255',
            'apelido' => 'required|string|max:255',
            'nome_pai' => 'required|string|max:255',
            'nome_mae' => 'required|string|max:255',
            'cpf' => 'required|string|unique:colaboradores,cpf|max:14',
            'data_nascimento' => 'required|date',
            'cargo' => 'required|string|max:255',
        ]);

        $colaborador = Colaborador::create($validatedData); // Cria o novo colaborador
        return response()->json($colaborador, 201); // Retorna o colaborador criado
    }

    // Atualizar um colaborador
    public function update(Request $request, $id)
    {
        $colaborador = Colaborador::find($id); // Encontra o colaborador pelo ID

        if (!$colaborador) {
            return response()->json(['message' => 'Colaborador não encontrado'], 404);
        }

        $validatedData = $request->validate([
            'nome_completo' => 'required|string|max:255',
            'apelido' => 'required|string|max:255',
            'nome_pai' => 'required|string|max:255',
            'nome_mae' => 'required|string|max:255',
            'cpf' => 'required|string|unique:colaboradores,cpf,' . $id . '|max:255',
            'data_nascimento' => 'required|date',
            'cargo' => 'required|string|max:255',
        ]);

        $colaborador->update($validatedData); // Atualiza o colaborador
        return response()->json($colaborador); // Retorna o colaborador atualizado
    }

    // Excluir um colaborador
    public function destroy($id)
    {
        $colaborador = Colaborador::find($id); // Encontra o colaborador pelo ID

        if (!$colaborador) {
            return response()->json(['message' => 'Colaborador não encontrado'], 404);
        }

        $colaborador->delete(); // Exclui o colaborador
        return response()->json(['message' => 'Colaborador excluído com sucesso'], 200);
    }
}
