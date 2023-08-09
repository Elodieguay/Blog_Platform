<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
// class PostFactory extends Factory
// {
//     /**
//      * Define the model's default state.
//      *
//      * @return array<string, mixed>
//      */


//     protected $model = Post::class;



   

class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'tag' => $this->faker->word,
            'user_id' => User::factory(),
            'image' => Storage::disk('public')->put('images', $this->faker->image('public/images', 100, 100, null, false)),
        ];
    }
}





    // --------code de Elodie------

//     public function definition(): array
//     {
//         return [
//             'title' => $this->faker->sentence,
//             'description' => $this->faker->paragraph,
//             'tag' => $this->faker->word,
//             'user_name'=> function () {
//                 return User::factory()->create()->name;
//             },
//             'user_id' => function () {
//                 return User::factory()->create()->id;
//             },
//         ];
//     }
// }

