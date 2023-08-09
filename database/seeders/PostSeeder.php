<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;

class PostSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Use the `factory()` method to create 10 users.
        Post::factory(10)->create();

        // Use the `hasPosts()` method to create 5 posts for each user.
        User::factory(10)->hasPosts(5)->create();
    }

}


