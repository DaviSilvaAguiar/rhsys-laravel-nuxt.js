<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ColaboradorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('colaboradores')->insert([
            [
                'nome_completo' => 'João Silva',
                'apelido' => 'João',
                'nome_pai' => 'José Silva',
                'nome_mae' => 'Maria Silva',
                'cpf' => '12345678901',
                'data_nascimento' => '1985-06-15',
                'cargo' => 'Desenvolvedor',
            ],
            [
                'nome_completo' => 'Maria Oliveira',
                'apelido' => 'Maria',
                'nome_pai' => 'Carlos Oliveira',
                'nome_mae' => 'Ana Oliveira',
                'cpf' => '98765432100',
                'data_nascimento' => '1990-09-30',
                'cargo' => 'Analista',
            ],
        ]);
    }
}
