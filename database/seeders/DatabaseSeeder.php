<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        // Appel du PostFactory pour créer des posts
        // Post::factory(10)->create(); // Créera 10 posts

        // Ici on fabrique 10 users qui fabriquent chacun 5 articles
        // Post::factory(5)->hasPost(5)->create();
     
        User::factory(5)->hasPosts(5)->create();

    }

}

 