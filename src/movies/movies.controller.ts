import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'

@Controller('movies')
export class MoviesController {
	@Get()
	getAll() {
		return 'this will return all movies'
	}

	@Get('search')
	search(@Query('year') searchingYear: string) {
		return `we are searching for a movie made after : ${searchingYear}`
	}

	@Get(':id')
	getOne(@Param('id') id: string) {
		return `this will return one ${id}`
	}

	@Post()
	create(@Body() movieData) {
		return movieData
	}

	@Delete(':id')
	remove(@Param('id') movieId: string) {
		return `this will delete a movie ${movieId}`
	}

	@Patch(':id')
	patch(@Param('id') movieId: string, @Body() updateData) {
		return {
			updatedMovie: movieId,
			...updateData
		}
	}
}
