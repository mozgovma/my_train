<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainPageController extends AbstractController
{
    #[Route('main_page/index.html.twig', name: 'app_main_page')]
    public function index(): Response
    {
        return $this->render('main_page/index.html.twig', [
            'controller_name' => 'MainPageController',
        ]);
    }
}
