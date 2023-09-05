# -*- coding: utf-8 -*-
"""
Created on Tue Sep  5 09:22:25 2023
@author: Martinez, Nicolas Agustin
"""

import matplotlib.pyplot as plt
import matplotlib.animation as animation
import random
import numpy as np

class Individual:
    def __init__(self, triangle, path=None):
        self.triangle = triangle
        if path:
            self.path = path
        else:
            self.path = self._create_path()
        self.fitness_value = self._calculate_fitness()

    def _create_path(self):
        path = [0]
        for i in range(1, len(self.triangle)):
            newVal = path[i-1] + random.choice([0, 1])
            if newVal > i:
                newVal = i
            path.append(newVal)
        return path

    def _calculate_fitness(self):
        return sum(self.triangle[i][index] for i, index in enumerate(self.path))

    def mutate(self):
        idx = random.randint(1, len(self.path) - 1)
        self.path[idx] = (self.path[idx] + random.choice([0, 1])) % len(self.triangle[idx])
        self.fitness_value = self._calculate_fitness()

    def crossover(self, other):
        idx = random.randint(1, len(self.path) - 1)
        child_path = self.path[:idx] + other.path[idx:]
        return Individual(self.triangle, child_path)

class GeneticAlgorithmUpdated:
    def __init__(self, triangle, population_size=500, mutation_rate=0.3, max_generations=200):
        self.triangle = triangle
        self.population_size = population_size
        self.mutation_rate = mutation_rate
        self.max_generations = max_generations
        self.population = [Individual(triangle) for _ in range(population_size)]
        self.best_individual = max(self.population, key=lambda ind: ind.fitness_value)
        self.history = []
        self.best_history = []

    def run(self):
        gen = 0
        while gen < self.max_generations:
            self.history.append([ind.path for ind in self.population])
            new_population = []
            for _ in range(self.population_size):
                parent1 = random.choice(self.population)
                parent2 = random.choice(self.population)
                child = parent1.crossover(parent2)
                new_population.append(child)
            for ind in new_population:
                if random.random() < self.mutation_rate:
                    ind.mutate()
            self.population = new_population
            current_best = max(self.population, key=lambda ind: ind.fitness_value)
            self.best_history.append(current_best.path)
            if current_best.fitness_value > self.best_individual.fitness_value:
                self.best_individual = current_best
            gen += 1
        return self.best_individual

    def visualize(self):
        fig, ax = plt.subplots()
        lines = [ax.plot([], [], color='gray', lw=1, alpha=0.5)[0] for _ in range(self.population_size)]
        best_line, = ax.plot([], [], color='red', lw=2)
        ax.set_xlim(0, len(self.triangle))
        ax.set_ylim(0, len(self.triangle))

        def init():
            for line in lines:
                line.set_data([], [])
            best_line.set_data([], [])
            return lines + [best_line]

        def animate(i):
            if i < len(self.history):
                for j, line in enumerate(lines):
                    x = list(range(len(self.triangle)))
                    y = self.history[i][j]
                    line.set_data(x, y)
                best_x = list(range(len(self.triangle)))
                best_y = self.best_history[i]
                best_line.set_data(best_x, best_y)
            return lines + [best_line]

        ani = animation.FuncAnimation(fig, animate, init_func=init, frames=len(self.history)+50, blit=True)
        #plt.show()
        ani.save("animation.mp4", writer="ffmpeg", fps=20, dpi=300)
        
triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
]

ga_updated = GeneticAlgorithmUpdated(triangle)
best_individual_updated = ga_updated.run()
print(best_individual_updated.fitness_value, best_individual_updated.path)
ga_updated.visualize()
